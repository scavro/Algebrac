/* Correctores locales: sin eval, red ni ejecución de código del estudiante.
   Criterio de coincidencia de un componente:
     · expresión exacta (fracción, radical): tolerancia 1e-8 relativa;
     · decimal: se acepta si es el redondeo correcto del valor exacto con
       los decimales escritos y la aproximación es significativa (error
       relativo ≤ 1 %).
   Así 3.1623 vale por √10, mientras 0.003 no vale por 1/300. */
(function(root){
'use strict';
const EPS=1e-8;      // coincidencia exacta, relativa
const ROUND=1e-3;    // ortogonalidad numérica y direcciones propias
function number(input){
 let s=String(input).trim().replaceAll('−','-').replaceAll('π','pi').replaceAll('√','sqrt').replaceAll(',','.');
 if(!s || s.length>240) throw Error('Escribe un número, una fracción o una expresión como sqrt(2)/2.');
 const re=/\s*(?:(\d+(?:\.\d*)?(?:[eE][+-]?\d+)?|\.\d+(?:[eE][+-]?\d+)?)|([a-zA-Z]+)|(\*\*|[+*/^()\-]))/y;
 let toks=[],pos=0,m;
 while(pos<s.length){re.lastIndex=pos;m=re.exec(s);if(!m)throw Error('Hay símbolos no admitidos. Usa +, −, *, **, /, ^, sqrt(...) y pi.');toks.push(m[1]??m[2]??m[3]);pos=re.lastIndex;}
 let i=0,depth=0;
 const safe=x=>{if(!Number.isFinite(x))throw Error('La expresión no da un número real finito. Revisa divisiones y raíces.');return x;};
 function atom(){if(++depth>40)throw Error('Expresión demasiado anidada.');let t=toks[i++],v;
 if(t==='('){v=expr();if(toks[i++]!==')')throw Error('Falta cerrar un paréntesis.');}
 else if(t==='sqrt'){if(toks[i++]!=='(')throw Error('Escribe la raíz como sqrt(2).');v=Math.sqrt(expr());if(toks[i++]!==')')throw Error('Falta cerrar sqrt(...).');}
 else if(t==='pi')v=Math.PI;
 else if(t&&/^(\d|\.)/.test(t))v=Number(t);
 else throw Error('Falta un número o hay una expresión incompleta.');
 depth--;return safe(v);}
 function power(){let a=atom();if(toks[i]==='^'||toks[i]==='**'){i++;a=safe(a**unary());}return a;}
 function unary(){if(toks[i]==='+'){i++;return unary();}if(toks[i]==='-'){i++;return -unary();}return power();}
 function term(){let a=unary();while(toks[i]==='*'||toks[i]==='/'){let op=toks[i++],b=unary();if(op==='/'&&b===0)throw Error('No se puede dividir por cero.');a=safe(op==='*'?a*b:a/b);}return a;}
 function expr(){let a=term();while(toks[i]==='+'||toks[i]==='-'){let op=toks[i++],b=term();a=safe(op==='+'?a+b:a-b);}return a;}
 let v=expr();if(i!==toks.length)throw Error('Separa factores con * y comprueba todos los símbolos.');return safe(v);
}
const close=(a,b)=>Math.abs(a-b)<=EPS*Math.max(1,Math.abs(a),Math.abs(b));
const closeR=(a,b)=>Math.abs(a-b)<=ROUND*Math.max(1,Math.abs(a),Math.abs(b));
/* Decimales escritos en el texto; Infinity si el componente es una expresión. */
function decimals(s){const t=String(s).trim().replaceAll(',','.');if(!/^[+-]?\d+(\.\d+)?$/.test(t))return Infinity;const i=t.indexOf('.');return i<0?0:t.length-i-1;}
/* Tolerancia de un componente escrito. */
function tolFor(raw,target){
 const exact=EPS*Math.max(1,Math.abs(target));
 const d=decimals(raw);
 if(d===Infinity||d===0)return exact;
 return Math.max(exact,0.5*Math.pow(10,-d));
}
/* Un componente escrito: expresión exacta o decimal redondeado.
   Un decimal con d decimales es válido si cae dentro del intervalo de
   redondeo a d decimales y la aproximación es significativa: error relativo
   menor del 0,5 %, o menor del 1,05 % cuando se han escrito al menos tres
   decimales. Así 3.1623 vale por √10, pero 0.003 no vale por 1/300. */
function valOk(raw,target,value){
 const v=value===undefined?Number(String(raw).trim().replaceAll(',','.')):value;
 if(!Number.isFinite(v))return false;
 const d=decimals(raw);
 const exact=EPS*Math.max(1,Math.abs(target));
 if(d===Infinity||d===0)return Math.abs(v-target)<=exact;
 if(Math.abs(v-target)>Math.max(exact,0.5*Math.pow(10,-d)))return false;
 const rel=Math.abs(v-target)/Math.max(1e-12,Math.abs(target));
 return rel<=0.005+1e-9||(d>=3&&rel<=0.0105+1e-9);
}
/* Casi correcto: el error es de un solo dígito, pero la cifra escrita es
   insuficiente para aceptarla como exacta. */
function valNear(raw,target,value){
 const d=decimals(raw);
 if(d===Infinity||d<1)return false;
 const v=value===undefined?Number(String(raw).trim().replaceAll(',','.')):value;
 if(!Number.isFinite(v))return false;
 const diff=Math.abs(v-target);
 if(diff<=tolFor(raw,target))return false;
 const rel=diff/Math.max(1e-12,Math.abs(target));
 return diff<=Math.pow(10,1-d)&&rel<=0.05;
}
function rawVector(s){s=String(s).trim();if(!s)throw Error('Introduce componentes separadas por punto y coma.');let a=s.split(';');if(a.length>40||a.some(x=>!x.trim()))throw Error('Revisa las componentes; no dejes posiciones vacías.');return a;}
function vector(s){return rawVector(s).map(number);}
function rawMatrix(s){let rows=String(s).trim().split(/\r?\n/);if(rows.length>20)throw Error('Demasiadas filas.');return rows.map(r=>rawVector(r));}
function matrix(s){return rawMatrix(s).map(r=>r.map(number));}
const norm=a=>Math.hypot(...a), dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
const sameVec=(a,b)=>a.length===b.length&&a.every((v,i)=>close(v,b[i]));
const shape=(a,b)=>a.length===b.length&&a.every((r,i)=>r.length===b[i].length);
const mul=(a,v)=>a.map(r=>dot(r,v));
function normalize(v){let n=norm(v);if(!n||!Number.isFinite(n))throw Error('El vector debe ser no nulo y tener componentes de tamaño manejable.');return v.map(x=>x/n);}
function orthobasis(rows){let q=[];for(let r of rows){let w=normalize(r);for(let pass=0;pass<2;pass++)for(let u of q){let c=dot(u,w);w=w.map((x,i)=>x-c*u[i]);}if(norm(w)>EPS)q.push(normalize(w));else if(norm(w)>0)throw Error('No puedo verificar esta base con suficiente precisión: las direcciones son dependientes o casi paralelas. Comprueba independencia o elige vectores más separados.');}return q;}
/* Núcleo por eliminación con pivoteo parcial: base de ker(A). */
function nullspace(rows){
 if(!rows.length)return [];
 const n=rows[0].length;let A=rows.map(r=>r.slice()),piv=[],r=0;
 for(let c=0;c<n&&r<A.length;c++){
  let best=r,bv=Math.abs(A[r][c]);
  for(let i=r+1;i<A.length;i++){const v=Math.abs(A[i][c]);if(v>bv){bv=v;best=i;}}
  if(bv<1e-12)continue;
  [A[r],A[best]]=[A[best],A[r]];
  const p=A[r][c];for(let j=c;j<n;j++)A[r][j]/=p;
  for(let i=0;i<A.length;i++){if(i!==r&&A[i][c]!==0){const f=A[i][c];for(let j=c;j<n;j++)A[i][j]-=f*A[r][j];}}
  piv.push(c);r++;
 }
 const basis=[];
 for(let c=0;c<n;c++){
  if(piv.includes(c))continue;
  const v=new Array(n).fill(0);v[c]=1;
  for(let i=0;i<piv.length;i++)v[piv[i]]=-A[i][c];
  basis.push(v);
 }
 return basis;
}
function vecOk(raws,vals,target){return raws.length===target.length&&raws.every((r,i)=>valOk(r,target[i],vals[i]));}
function matchSet(raws,vals,targets){let rem=targets.map((_,i)=>i);for(let k=0;k<raws.length;k++){let j=rem.findIndex(t=>valOk(raws[k],targets[t],vals[k]));if(j<0)return false;rem.splice(j,1);}return rem.length===0;}
function grade(field,input){
 try {let a,b=field.answer,ok=false,near=false;
 switch(field.kind){
 case 'choice': if(!input)throw Error('Selecciona una respuesta.');ok=input===b;break;
 case 'number':a=number(input);ok=close(a,b)||valOk(input,b,a);near=!ok&&valNear(input,b,a);break;
 case 'vector':{let raw=rawVector(input);a=raw.map(number);ok=vecOk(raw,a,b);near=!ok&&raw.length===b.length&&raw.every((r,i)=>valNear(r,b[i],a[i]));break;}
 case 'set':{let raw=rawVector(input),a=raw.map(number),uniqRaw=[],uniqVal=[],uniq=[];a.forEach((v,i)=>{if(!uniq.some(u=>close(u,v))){uniq.push(v);uniqRaw.push(raw[i]);uniqVal.push(v);}});ok=matchSet(uniqRaw,uniqVal,b);break;}
 case 'matrix':{let raw=rawMatrix(input);a=raw.map(r=>r.map(number));ok=shape(a,b)&&a.every((r,i)=>vecOk(raw[i],r,b[i]));break;}
 case 'rowsSet':{let raw=rawMatrix(input),vals=raw.map(r=>r.map(number));ok=raw.length===b.length&&b.every(t=>raw.some((r,i)=>vecOk(r,vals[i],t)));break;}
 case 'basis':a=matrix(input);if(!shape(a,b))break;let q=orthobasis(a),target=orthobasis(b);ok=q.length===b.length&&target.length===q.length&&target.every(v=>{let w=[...v];for(let u of q){const c=dot(u,w);w=w.map((x,i)=>x-c*u[i]);}return norm(w)<ROUND;});break;
 case 'eigen':case 'unitEigen':{a=vector(input);if(a.length!==field.matrix.length)break;
  if(a.every(x=>x===0))break;          // el vector cero nunca es autovector
  const raw=rawVector(input);
  const M=field.matrix.map((r,i)=>r.map((v,j)=>v-(i===j?field.eigenvalue:0)));
  const res=norm(mul(M,a));
  const scale=Math.max(1,Math.hypot(...M.flat()),Math.abs(field.eigenvalue))*Math.max(1,norm(a));
  // Tolerancia: la del redondeo escrito, pero solo si es una aproximación
  // significativa; en caso contrario, la tolerancia estricta.
  const digits=raw.map(x=>decimals(x)).filter(x=>x!==Infinity&&x>0);
  const d=digits.length?Math.min(...digits):Infinity;
  const rel=res/Math.max(1e-12,scale);
  const significant=d===Infinity?false:(rel<=0.005+1e-9||(d>=3&&rel<=0.0105+1e-9));
  ok=res<=EPS*scale||(significant&&res<=0.5*Math.pow(10,-d)*scale);
  if(field.kind==='unitEigen'){const nn=norm(a);const dn=norm(a)<1e-12?0:null;
   const reln=Math.abs(nn-1);
   const nd=raw.map(x=>decimals(x)).filter(x=>x!==Infinity&&x>0);
   const sig=reln<=0.005+1e-9||(nd.length>=3&&reln<=0.0105+1e-9);
   ok=ok&&(reln<=EPS||(sig&&reln<=0.5*Math.pow(10,-Math.min(...(nd.length?nd:[0])))));}
  break;}
 case 'unitSpan':{a=vector(input);if(a.length!==field.matrix.length)break;
  const nn=norm(a);if(nn<1e-12)break;
  const raw=rawVector(input),ds=raw.map(x=>decimals(x)).filter(x=>x!==Infinity&&x>0);
  const reln=Math.abs(nn-1);
  const sigN=reln<=0.005+1e-9||(ds.length>=3&&reln<=0.0105+1e-9);
  if(!sigN)break;
  // La perpendicularidad se exige respecto de todo el complemento de la imagen.
  const AT=field.matrix[0].map((_,j)=>field.matrix.map(r=>r[j]));
  const ker=nullspace(AT);
  ok=ker.every(v=>Math.abs(dot(a,v))<=ROUND*Math.max(1,norm(a))*Math.max(1,norm(v)));
  break;}
 case 'negative':a=vector(input);if(a.length!==field.matrix.length)break;let v=normalize(a);let quadratic=dot(v,mul(field.matrix,v));if(Math.abs(quadratic)<=EPS)throw Error('El signo queda demasiado cerca de cero para esta comprobación numérica. Introduce un vector cuyo signo negativo sea claro.');ok=quadratic < -EPS;break;
 case 'spectral':a=matrix(input);if(!shape(a,b))break;let cols=a[0].map((_,i)=>a.map(r=>r[i]));ok=cols.every((v,i)=>closeR(norm(v),1)&&cols.every((w,j)=>closeR(dot(v,w),i===j?1:0))&&v.every((x,k)=>closeR(mul(field.matrix,v)[k],x*field.diagonal[i])));break;
 default: throw Error('Este tipo de respuesta necesita revisión manual.');
 }
 if(ok)return {ok:true,message:'Resultado correcto.'};
 if(near)return {ok:false,near:true,message:'Casi: el valor es correcto pero redondeado. Escribe la fracción o el radical exacto, o añade más decimales.'};
 return {ok:false,message:'Todavía no coincide. Revisa dimensiones, signos y el procedimiento; puedes usar una pista.'};
 }catch(e){return {ok:false,invalid:true,message:e.message};}
}
root.AlgebraEngine={number,vector,matrix,grade,close,orthobasis,nullspace};
if(typeof module!=='undefined')module.exports=root.AlgebraEngine;
})(typeof window!=='undefined'?window:globalThis);
