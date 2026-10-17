// Computes every number used in lecture.html. Run: node compute.js
// Writes data.json (embedded in the page by build.js) and prints a report.
const fs=require('fs');
const L=fs.readFileSync(__dirname+'/../src/owid-life-expectancy-vs-gdp-per-capita-2022.csv','utf8').trim().split('\n').slice(1);
const rows=L.map(l=>{const m=l.match(/^(.*),([A-Z]{3}),(\d+),([\d.]+),([\d.]+),(\d+),(.*)$/);return {n:m[1],c:m[2],y:+m[4],gdp:+m[5],reg:m[7]}});
const r1=v=>Math.round(v*10)/10;
function fit(pts){const n=pts.length,mx=pts.reduce((s,a)=>s+a.x,0)/n,my=pts.reduce((s,a)=>s+a.y,0)/n;let sxy=0,sxx=0,syy=0;for(const a of pts){sxy+=(a.x-mx)*(a.y-my);sxx+=(a.x-mx)**2;syy+=(a.y-my)**2}const m=sxy/sxx;return {n,mx,my,m,b:my-m*mx,r:sxy/Math.sqrt(sxx*syy)}}
const ssr=(pts,m,b)=>pts.reduce((s,a)=>s+(a.y-(m*a.x+b))**2,0);
const out={};
// class table: South America, GDP in $1000s rounded to 0.1, life expectancy rounded to 0.1
const sa=rows.filter(a=>a.reg=='South America').map(a=>({n:a.n,x:r1(a.gdp/1000),y:r1(a.y),rawx:a.gdp,rawy:a.y}));
out.sa=sa.map(a=>({n:a.n,x:a.x,y:a.y}));
const F=fit(sa);out.fit=F;
console.log('South America table (rounded):');sa.forEach(a=>console.log(' ',a.n.padEnd(10),a.x.toFixed(1),a.y.toFixed(1),' raw',a.rawx,a.rawy));
console.log('fit on rounded',F);
console.log('fit on raw',fit(sa.map(a=>({x:a.rawx/1000,y:a.rawy}))));
console.log('SSR at LS',ssr(sa,F.m,F.b).toFixed(4));
const mR=Math.round(F.m*100)/100,bR=Math.round(F.b*100)/100;
console.log('rounded line y =',mR,'x +',bR,' SSR',ssr(sa,mR,bR).toFixed(4));
const m4=Math.round(F.m*10000)/10000,b4=Math.round(F.b*100)/100;
console.log('spreadsheet-typed line y =',m4,'x +',b4);
sa.forEach(a=>{const p=m4*a.x+b4;console.log('  ',a.n.padEnd(10),'pred',p.toFixed(4),'res',(a.y-p).toFixed(4),'sq',((a.y-p)**2).toFixed(4))});
console.log('  SSR with typed line',ssr(sa,m4,b4).toFixed(4));
console.log('LS residuals:');sa.forEach(a=>console.log('  ',a.n.padEnd(10),(a.y-(F.m*a.x+F.b)).toFixed(3)));
console.log('min x,max x',Math.min(...sa.map(a=>a.x)),Math.max(...sa.map(a=>a.x)));
// Task 3: line through Venezuela and Chile
const V=sa.find(a=>a.n=='Venezuela'),C=sa.find(a=>a.n=='Chile');
const sl=(C.y-V.y)/(C.x-V.x);console.log('Task3 slope exact',sl, 'rounded',Math.round(sl*100)/100);
const s3=Math.round(sl*100)/100,b3=V.y-s3*V.x;console.log('Task3 intercept',b3,'check at Chile',s3*C.x+b3);
const b3r=Math.round(b3*100)/100;
for(const nm of ['Bolivia','Ecuador']){const a=sa.find(z=>z.n==nm);const p=s3*a.x+b3r;console.log('  Task3',nm,'pred',p.toFixed(4),'res',(a.y-p).toFixed(4),'sq',((a.y-p)**2).toFixed(4))}
console.log('  Task3 line SSR all 10',ssr(sa,s3,b3r).toFixed(4));
sa.forEach(a=>{const p=s3*a.x+b3r;console.log('    ',a.n.padEnd(10),'res',(a.y-p).toFixed(3))});
out.task3={m:s3,b:b3r};
// slider grid best (slope step 0.01, intercept step 0.05)
let best={s:1e9};for(let i=0;i<=100;i++)for(let j=0;j<=400;j++){const m=i/100,b=60+j*0.05;const s=ssr(sa,m,b);if(s<best.s)best={s,m,b}}
console.log('best on slider grid',best);
// sum of residuals of a bad line, to show cancellation: horizontal line at mean y
console.log('mean y',F.my,'sum residuals from flat line at mean', sa.reduce((s,a)=>s+a.y-F.my,0).toFixed(6), 'SSR flat', ssr(sa,0,F.my).toFixed(4));
// Task 6 predictions with rounded line
const mU=Math.round(F.m*100)/100,bU=Math.round(F.b*100)/100;
for(const c of ['CRI','MEX','USA','QAT','NOR','JPN']){const a=rows.find(z=>z.c==c);const x=r1(a.gdp/1000);console.log('pred',c,a.n,'x',x,'actual',r1(a.y),'pred(rounded line)',(mU*x+bU).toFixed(3),'pred(exact)',(F.m*x+F.b).toFixed(3))}
console.log('slope x5',(mU*5).toFixed(3),'exact',F.m*5);
// world
const world=rows.filter(a=>a.c!='CAF').map(a=>({n:a.n,c:a.c,x:Math.round(a.gdp/100)/10,y:r1(a.y),sa:a.reg=='South America'}));
out.world=world;const W=fit(rows.filter(a=>a.c!='CAF').map(a=>({x:a.gdp/1000,y:a.y})));console.log('world n',world.length,'r',W.r, 'with CAF r',fit(rows.map(a=>({x:a.gdp/1000,y:a.y}))).r);
console.log('world max y',Math.max(...world.map(a=>a.y)),'max x',Math.max(...world.map(a=>a.x)));
console.log('countries with gdp>40k',world.filter(a=>a.x>40).length,'their LE range',Math.min(...world.filter(a=>a.x>40).map(a=>a.y)),Math.max(...world.filter(a=>a.x>40).map(a=>a.y)));
console.log('CAF',rows.find(a=>a.c=='CAF'));
// gallery: made-up data with exact r
let seed=12345;const rnd=()=>{seed=(seed*1103515245+12345)%2147483648;return seed/2147483648};
const gauss=()=>{let u=0;for(let i=0;i<12;i++)u+=rnd();return u-6};
function exactR(n,r){const x=[],e=[];for(let i=0;i<n;i++){x.push(gauss());e.push(gauss())}
 const mean=v=>v.reduce((s,a)=>s+a,0)/v.length;const mx=mean(x);let xs=x.map(v=>v-mx);let me=mean(e);let es=e.map(v=>v-me);
 const bx=es.reduce((s,v,i)=>s+v*xs[i],0)/xs.reduce((s,v)=>s+v*v,0);es=es.map((v,i)=>v-bx*xs[i]);
 const sd=v=>Math.sqrt(v.reduce((s,a)=>s+a*a,0));const zx=xs.map(v=>v/sd(xs)),ze=es.map(v=>v/sd(es));
 return zx.map((v,i)=>({x:+(v*10).toFixed(3),y:+((r*v+Math.sqrt(1-r*r)*ze[i])*10).toFixed(3)}))}
const curve=[];for(let i=0;i<30;i++){const x=-1+2*i/29+(rnd()-0.5)*0.04;curve.push({x:+(x*10).toFixed(3),y:+((x*x*1.6-0.53+(rnd()-0.5)*0.25)*10).toFixed(3)})}
const gal={A:exactR(30,-0.5),B:exactR(30,0.95),C:curve,D:exactR(30,0),E:exactR(30,-0.9),F:exactR(30,0.5)};
out.gallery={};for(const k in gal){const f=fit(gal[k]);out.gallery[k]={pts:gal[k],r:Math.round(f.r*100)/100};console.log('gallery',k,f.r.toFixed(4))}
fs.writeFileSync(__dirname+'/data.json',JSON.stringify(out));
