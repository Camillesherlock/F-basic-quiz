const url="http://localhost:8080/users/";

const information=(name,age)=>{
`my name is ${name} ${age}yo and this is my resumn`
}

const initLi = (data,title,description)=>{
    `<li>
    <p className="data">${data}</p>
    <div className="my-information">
    <p className="title">${title}</p>
    <p className="deacription">${description}</p>
    </div>
    </li>
    `
}

const addLi = (year, title, description) => {
    $("ul").append(initLi(year, title, description));
  };

const getInformation = (id)=>{
return fetch(`${url}${id}`,{method:"GET",headers: {
    "content-type": "application/json",
  },})
.then((response)=>{
    if(response.ok){
        return response.json();
    }
}).then((data)=>{
    $(".resume-description").html(information(data.name,data.age))
    $(".describe-me").html(data.description)
}).catch((e)=>console.log(e))
};

const getEducation = (id) =>{
    return fetch(`${url}${id}/educations`,{
        method:"GET",
        headers:{
            "content-type":"application/json",
        },
    }).then((response)=>{
        if(response.ok){
            return response.json();
        }
    }).then((data)=>{
        data.forEach(element => {
            addLi(element.year,element.title,element.description)
        });
    }
    ).catch(e=>console.log(e));
};

export {getInformation,getEducation}