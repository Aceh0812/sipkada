import{u as L,r as t,R as e,H as O,d as B}from"./app-2f88eaee.js";import{L as F}from"./Account-8ba589b9.js";import{S as M}from"./sweetalert2.all-92a6b231.js";import{S as m}from"./react-select.esm-64768b31.js";import"./index-d9835c12.js";function G(){const{errors:l,kabupatens:N,kecamatans:v,desas:f}=L().props,[c,h]=t.useState(""),[n,w]=t.useState(""),[r,g]=t.useState(null),[S,k]=t.useState(null),[o,C]=t.useState(null),[d,T]=t.useState(null),[i,y]=t.useState(null),[s,P]=t.useState(null),[K,u]=t.useState([]),[p,A]=t.useState(""),[E,_]=t.useState(""),[b,x]=t.useState(""),I=async a=>{const H=await(await fetch(`/account/gettps?desa_id=${a}`)).json();u(H)};t.useEffect(()=>{s?I(s.value):u([])},[s]);const D=async a=>{a.preventDefault(),B.Inertia.post("/account/saksis",{name:c,phone:r,address:n,ktp:S,kabupaten_id:d.value,kecamatan_id:i.value,desa_id:s.value,tps_id:o.value,email:p,password:E,password_confirmation:b},{onSuccess:()=>{M.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(O,null,e.createElement("title",null,"TAMBAH SAKSI - SIPKADA")),e.createElement(F,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Tambah Saksi")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:D},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Nama Saksi"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>h(a.target.value),placeholder:"Tambah Nama Saksi"})),l.name&&e.createElement("div",{className:"alert alert-danger"},l.name)),e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"No. Hp"),e.createElement("input",{type:"text",className:"form-control",value:r,onChange:a=>g(a.target.value),placeholder:"Tambah No. Hp"})),l.phone&&e.createElement("div",{className:"alert alert-danger"},l.phone)),e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tambah Alamat"),e.createElement("input",{type:"text",className:"form-control",value:n,onChange:a=>w(a.target.value),placeholder:"Tambah Alamat Lengkap"})),l.address&&e.createElement("div",{className:"alert alert-danger"},l.address))),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Upload Foto KTP"),e.createElement("input",{type:"file",className:"form-control",onChange:a=>k(a.target.files[0])})),l.ktp&&e.createElement("div",{className:"alert alert-danger"},l.ktp),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kabupaten"),e.createElement(m,{options:N,value:d,onChange:a=>T(a)})),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kecamatan"),e.createElement(m,{options:v,value:i,onChange:a=>y(a)}))),e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Desa /Kelurahan"),e.createElement(m,{options:f,value:s,onChange:a=>P(a)}))),e.createElement("div",{className:"col-md-4"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Pilih TPS"),e.createElement(m,{options:K,value:o,onChange:a=>C(a)})))),e.createElement("hr",null),e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Tambah Email"),e.createElement("input",{type:"text",className:"form-control",value:p,onChange:a=>A(a.target.value),placeholder:"Tambah Alamat Email"})),l.email&&e.createElement("div",{className:"alert alert-danger"},l.email)),e.createElement("div",{className:"col-md-"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Password"),e.createElement("input",{type:"password",className:"form-control",value:E,onChange:a=>_(a.target.value),placeholder:"Tambah Password"})),l.password&&e.createElement("div",{className:"alert alert-danger"},l.password)),e.createElement("div",{className:"col-md-"},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Konfirmasi Password"),e.createElement("input",{type:"password",className:"form-control",value:b,onChange:a=>x(a.target.value),placeholder:"Konfirmasi Password"})))),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save")))))))))}export{G as default};