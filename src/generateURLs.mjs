const thisUrl = 'https://hotshotdb.herokuapp.com';
export function html(child) {
  let htmlStr = `
  <html
  <head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"> 
  </head>
  <body><div style="position:fixed; top:0; left:0;width:100vw; height:100vh; background:#4c525f; display:flex;align-items:center;justify-content:center; font-family: 'Ubuntu', sans-serif;">`;
  htmlStr += child;
  htmlStr += '</div></body></html>';
  return htmlStr;
}
export function inputForm(value) {
  return `
   <form action="/" method="POST" style="display:flex;flex-direction:column">
   <h4 style="color:#fff;margin:0px auto 10px auto;text-align:center">Enter Your Value</h4>
   <input maxlength="200" onchange="document.getElementById(\'submitB\').title=\'dd\'" name="newItem"  value="${
     value || ''
   }" style="padding:10px; border-radius:10px; border:none; text-align:center"/>
   <button id="submitB" style="background:#33cdcd; border:none; border-radius:10px; width:80; padding:10px 0 10px 0; margin:auto; margin-top:10px">${
     value ? 'UPDATE' : 'SAVE'
   }</button>
   </form>`;
}

export function updateForm(uuid, value) {
  return `
   <form action="/${uuid}/${value}" method="POST" style="display:flex;flex-direction:column">
   <h4 style="color:#fff;margin:0px auto 10px auto;text-align:center">Enter Your Value</h4>
   <input  maxlength="200" onchange="document.getElementById(\'submitB\').title=\'dd\'" name="newItem"  value="${
     value || ''
   }" style="padding:10px; border-radius:10px; border:none; text-align:center"/>
   <input type="hidden" name="hiddenId"  value="${uuid || ''}" />
   <button id="submitB" style="background:#33cdcd; border:none; border-radius:10px; width:80; padding:10px 0 10px 0; margin:auto; margin-top:10px">${
     value ? 'UPDATE' : 'SAVE'
   }</button>
   </form>`;
}

export function generateURLs(value, uuid, deleteCode) {
  return `
  <div style="display:flex;flex-direction:column;align-items:center;justify-content:center">
    <div style="color:#fafafa;padding:10;border-radius:10px; text-align:center">
    <h3 style="margin:0px">Save these details!</h3>
    <p style="margin:0px; color:rgba(255,255,255,0.5) !important">You won't be able to get them again</p>
    </div>
    
          
        <h5 style="margin:10px 0 0; color:rgba(255,255,255,0.7)">GUI</h5> 
        <a href="${thisUrl}/${uuid}"><h4 style="margin:0px; color:rgba(255,255,255,1) !important">${thisUrl}/${uuid}</h4></a>

        <h5 style="margin:10px 0 0; color:rgba(255,255,255,0.7)">GET</h5> 
        <a href="${thisUrl}/api/${uuid}"><h4 style="margin:0px; color:rgba(255,255,255,1) !important">${thisUrl}/api/${uuid}</h4></a>

        <h5 style="margin:10px 0 0; color:rgba(255,255,255,0.7)">PUT</h5> 
        <h4 style="margin:0px; color:rgba(255,255,255,1) !important">${thisUrl}/${uuid}/YOUR NEW VALUE</h4></a>

        <h5 style="margin:10px 0 0; color:rgba(255,255,255,0.7)">DELETE</h5> 
        <h4 style="margin:0px; color:rgba(255,255,255,1) !important">${thisUrl}/${uuid}/${deleteCode}</h4>`;
}

export function doesntExist() {
  return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center">
  <h3 style="color:#fff">That Value Doesn't Exist</h3>
  <a href="/">  <button style="background:#33cdcd; border:none; border-radius:10px; width:80; padding:10px 0 10px 0; margin:auto; ">Try Again</button></a>
  </div>`;
}

export function yourValue(value, uuid, deleteCode) {
  return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center">
  <h3 style="color:#fff">${value}</h3>
  <a href="/update/${uuid}/${value}"><button style="background:#33cdcd; border:none; border-radius:10px; width:80; padding:10px 0 10px 0; margin:auto; ">Change</button></a>
  </div>`;
}
