import{u as U,r as l,R as e,H as j,d as L}from"./app-2f88eaee.js";import{L as F}from"./Account-8ba589b9.js";import{S as _}from"./sweetalert2.all-92a6b231.js";import"./index-d9835c12.js";function R(){const{errors:s,quickcount:t,quickcount_details:d,calons:Q}=U().props;console.log("quickcount:",t);const i=t&&t.suara_sah?Number(t.suara_sah):0,E=t&&t.suara_tidak_sah?Number(t.suara_tidak_sah):0,N=t&&t.total_suara?Number(t.total_suara):0;console.log("Initial Values:",{initialSuaraSah:i,initialSuaraTidakSah:E,initialTotalSuara:N});const[b,S]=l.useState((t==null?void 0:t.tps_name)||"");l.useState(t.kabupaten_id),l.useState(t.kecamatan_id),l.useState(t.desa_id),l.useState(t.tps);const[g,y]=l.useState(t.kabupaten_name),[C,k]=l.useState(t.kecamatan_name),[w,x]=l.useState(t.desa_name),[u,T]=l.useState((t==null?void 0:t.jumlah_dpt)||0),[n,v]=l.useState(i),[c,O]=l.useState(E),[p,f]=l.useState(N),[K,D]=l.useState(null),[o,I]=l.useState(d.map(a=>({calon_id:a.calon_id,total_suara_calon:a.total_suara_calon||""}))),[h,P]=l.useState(!1),V=(a,r)=>{const m=[...o];m[a].total_suara_calon=r,I(m)};l.useEffect(()=>{const a=o.reduce((r,m)=>r+Number(m.total_suara_calon||0),0);v(a)},[o]),l.useEffect(()=>{f(Number(n)+Number(c))},[n,c]),l.useEffect(()=>{const a=Number(n)+Number(c);P(a===Number(u))},[n,c,u]);const A=a=>{a.preventDefault(),L.Inertia.post(`/account/quickcounts/${t.id}`,{suara_sah:n,suara_tidak_sah:c,total_suara:p,file:K,tps_id:b,jumlah_dpt:u,calonVotes:o,quickcount_id:t.id,_method:"PUT"},{onSuccess:()=>{_.fire({title:"Success",text:"Quick count data has been saved.",icon:"success",confirmButtonText:"OK"})},onError:()=>{_.fire({title:"Error",text:"There was an error saving the quick count data.",icon:"error",confirmButtonText:"OK"})}})};return e.createElement(e.Fragment,null,e.createElement(j,null,e.createElement("title",null,"UPLOAD C1 - SIPKADA")),e.createElement(F,null,e.createElement("div",{className:"page-content"},e.createElement("div",{className:"row mt-3"},e.createElement("div",{className:"card"},e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:A},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"TPS"),e.createElement("input",{type:"text",className:"form-control",value:b,onChange:a=>S(a.target.value),readOnly:!0})),s.tps_id&&e.createElement("div",{className:"alert alert-danger"},s.tps_id)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Jumlah Dpt"),e.createElement("input",{type:"text",className:"form-control",value:u,onChange:a=>T(a.target.value),readOnly:!0})),s.jumlah_dpt&&e.createElement("div",{className:"alert alert-danger"},s.jumlah_dpt))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kabupaten"),e.createElement("input",{type:"text",className:"form-control",value:g,onChange:a=>y(a.target.value),readOnly:!0}))),e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kecamatan"),e.createElement("input",{type:"text",className:"form-control",value:C,onChange:a=>k(a.target.value),readOnly:!0}))),e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Desa /Kelurahan"),e.createElement("input",{type:"text",className:"form-control",value:w,onChange:a=>x(a.target.value),readOnly:!0})))),e.createElement("div",{className:"row mt-3"},e.createElement("div",{className:"col-12 col-lg-12 d-flex"},e.createElement("div",{className:"card radius-10 w-100"},e.createElement("div",{className:"card-header"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",null,e.createElement("h6",{className:"mb-0"},"HASIL QUICKCOUNT PILKADA 2024")))),e.createElement("div",{className:"card-body table-responsive"},e.createElement("table",{className:"table table-striped"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"#"),e.createElement("th",null,"Calon"),e.createElement("th",null,"Perolehan Suara"))),e.createElement("tbody",null,d.map((a,r)=>e.createElement("tr",{key:r},e.createElement("td",null,r+1),e.createElement("td",null,a.calon_name),e.createElement("td",null,e.createElement("input",{type:"text",className:"form-control",placeholder:"30",value:o[r].total_suara_calon,onChange:m=>V(r,m.target.value)})))))),e.createElement("hr",null),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Suara Sah"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>v(a.target.value),readOnly:!0})),s.suara_sah&&e.createElement("div",{className:"alert alert-danger"},s.suara_sah)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Suara Tidak Sah"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>O(a.target.value)})),s.suara_tidak_sah&&e.createElement("div",{className:"alert alert-danger"},s.suara_tidak_sah)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Total Suara"),e.createElement("input",{type:"text",className:"form-control",value:p,onChange:a=>f(a.target.value),readOnly:!0})),s.total_suara&&e.createElement("div",{className:"alert alert-danger"},s.total_suara)),e.createElement("div",{className:"col-md-3"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Upload C1"," ",e.createElement("span",{className:"text-danger"},"*")),e.createElement("input",{type:"file",className:"form-control",onChange:a=>D(a.target.files[0])})),s.file&&e.createElement("div",{className:"alert alert-danger"},s.file))),e.createElement("div",{className:"mt-3 d-grid gap-2"},e.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!h},"Update"),!h&&e.createElement("div",{className:"alert alert-danger text-center"},"Total suara harus sama dengan jumlah DPT.")))))))))))))}export{R as default};