import{u as i,r as s,R as e,H as p,d as E}from"./app-2f88eaee.js";import{L as b}from"./Account-8ba589b9.js";import{S as f}from"./sweetalert2.all-92a6b231.js";import{S as N}from"./react-select.esm-64768b31.js";import"./index-d9835c12.js";function h(){const{errors:l,kecamatan:t,kabupatens:n}=i().props,[c,o]=s.useState(t.name),[m,r]=s.useState(t.kabupaten_id);s.useEffect(()=>{const a=n.find(u=>u.value===t.kabupaten_id);r(a)},[t.kabupaten_id,n]);const d=async a=>{a.preventDefault(),E.Inertia.post(`/account/kecamatans/${t.id}`,{name:c,kabupaten_id:m.value,_method:"PUT"},{onSuccess:()=>{f.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("title",null,"EDIT KECAMATAN - SIPKADA")),e.createElement(b,null,e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-folder"})," Edit Kecamatan")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:d},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Edit Nama Kecamatan"),e.createElement("input",{type:"text",className:"form-control",value:c,onChange:a=>o(a.target.value),placeholder:"Edit Nama Kecamatan"})),l.name&&e.createElement("div",{className:"alert alert-danger"},l.name),e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kabupaten"),e.createElement(N,{options:n,value:m,onChange:a=>r(a)})),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," Save")))))))))}export{h as default};