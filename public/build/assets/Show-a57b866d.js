import{u as P,r as l,R as e,H as V,d as H}from"./app-2f88eaee.js";import{L}from"./Account-8ba589b9.js";import{S as _}from"./sweetalert2.all-92a6b231.js";import"./index-d9835c12.js";function J(){const{errors:r,quickcount:t,quickcount_details:d,calons:j}=P().props;console.log("quickcount:",t);const i=t&&t.suara_sah?Number(t.suara_sah):0,E=t&&t.suara_tidak_sah?Number(t.suara_tidak_sah):0,N=t&&t.total_suara?Number(t.total_suara):0;console.log("Initial Values:",{initialSuaraSah:i,initialSuaraTidakSah:E,initialTotalSuara:N});const[v,f]=l.useState((t==null?void 0:t.tps_name)||"");l.useState(t.kabupaten_id),l.useState(t.kecamatan_id),l.useState(t.desa_id),l.useState(t.tps);const[S,g]=l.useState(t.kabupaten_name),[k,y]=l.useState(t.kecamatan_name),[C,w]=l.useState(t.desa_name),[u,T]=l.useState((t==null?void 0:t.jumlah_dpt)||0),[c,b]=l.useState(i),[n,x]=l.useState(E),[p,h]=l.useState(N),[O,q]=l.useState(null),[o,A]=l.useState(d.map(a=>({calon_id:a.calon_id,total_suara_calon:a.total_suara_calon||""}))),[F,D]=l.useState(!1),I=(a,s)=>{const m=[...o];m[a].total_suara_calon=s,A(m)};l.useEffect(()=>{const a=o.reduce((s,m)=>s+Number(m.total_suara_calon||0),0);b(a)},[o]),l.useEffect(()=>{h(Number(c)+Number(n))},[c,n]),l.useEffect(()=>{const a=Number(c)+Number(n);D(a===Number(u))},[c,n,u]);const K=a=>{a.preventDefault(),H.Inertia.post(`/account/quickcounts/${t.id}`,{suara_sah:c,suara_tidak_sah:n,total_suara:p,file:O,tps_id:v,jumlah_dpt:u,calonVotes:o,quickcount_id:t.id,_method:"PUT"},{onSuccess:()=>{_.fire({title:"Success",text:"Quick count data has been saved.",icon:"success",confirmButtonText:"OK"})},onError:()=>{_.fire({title:"Error",text:"There was an error saving the quick count data.",icon:"error",confirmButtonText:"OK"})}})};return e.createElement(e.Fragment,null,e.createElement(V,null,e.createElement("title",null,"DETAIL C1 - SIPKADA")),e.createElement(L,null,e.createElement("div",{className:"page-content"},e.createElement("div",{className:"row mt-3"},e.createElement("div",{className:"card"},e.createElement("div",{className:"card-header"},e.createElement("h4",{className:"card-title"},"Detail C1 - SIPKADA")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:K},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama TPS"),e.createElement("input",{type:"text",className:"form-control",value:v,onChange:a=>f(a.target.value),readOnly:!0})),r.tps_id&&e.createElement("div",{className:"alert alert-danger"},r.tps_id)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Jumlah Dpt"),e.createElement("input",{type:"text",className:"form-control",value:u,onChange:a=>T(a.target.value),readOnly:!0})),r.jumlah_dpt&&e.createElement("div",{className:"alert alert-danger"},r.jumlah_dpt))),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kabupaten"),e.createElement("input",{type:"text",className:"form-control",value:S,onChange:a=>g(a.target.value),readOnly:!0}))),e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kecamatan"),e.createElement("input",{type:"text",className:"form-control",value:k,onChange:a=>y(a.target.value),readOnly:!0}))),e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Desa /Kelurahan"),e.createElement("input",{type:"text",className:"form-control",value:C,onChange:a=>w(a.target.value),readOnly:!0})))),e.createElement("div",{className:"row mt-3"},e.createElement("div",{className:"col-12 col-lg-12 d-flex"},e.createElement("div",{className:"card radius-10 w-100"},e.createElement("div",{className:"card-header"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",null,e.createElement("h6",{className:"mb-0"},"HASIL HITUNG CEPAT PILKADA 2024")))),e.createElement("div",{className:"card-body table-responsive"},e.createElement("table",{className:"table table-striped"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"#"),e.createElement("th",null,"Paslon"),e.createElement("th",null,"Perolehan Suara"))),e.createElement("tbody",null,d.map((a,s)=>e.createElement("tr",{key:s},e.createElement("td",null,s+1),e.createElement("td",null,a.calon_name),e.createElement("td",null,e.createElement("input",{type:"text",className:"form-control",placeholder:"30",value:o[s].total_suara_calon,onChange:m=>I(s,m.target.value),readOnly:!0})))))),e.createElement("hr",null),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Suara Sah"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>b(a.target.value),readOnly:!0})),r.suara_sah&&e.createElement("div",{className:"alert alert-danger"},r.suara_sah)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Suara Tidak Sah"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>x(a.target.value),readOnly:!0})),r.suara_tidak_sah&&e.createElement("div",{className:"alert alert-danger"},r.suara_tidak_sah)),e.createElement("div",{className:"col-md-6"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Total Suara"),e.createElement("input",{type:"text",className:"form-control",value:p,onChange:a=>h(a.target.value),readOnly:!0})),r.total_suara&&e.createElement("div",{className:"alert alert-danger"},r.total_suara))),e.createElement("div",{className:"mt-3 row"},e.createElement("h5",null,"Hasil Upload C1")),e.createElement("div",{className:"mt-3 d-grid gap-2"},e.createElement("a",{href:`http://127.0.0.1:8000/storage/quickcounts/${t.file}`,target:"_blank"},e.createElement("img",{src:`http://127.0.0.1:8000/storage/quickcounts/${t.file}`,alt:""}))))))))))))))}export{J as default};