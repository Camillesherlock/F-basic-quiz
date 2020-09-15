const url="http://localhost:8080/users/";

const getInformation = (id)=>{
return fetch(`${url}${id}`,{method:"GET",headers: {
    "content-type": "application/json",
  },})
.then((response)=>{
    if(response.ok){
        return response.json();
    }
}).then((data)=>{
    $(".resume-description").html(`MY NAME IS ${data.name} ${data.age}YO AND THIS IS MY RESUME/CV`)
    $(".header-img").attr("src", data.avatar);
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
            $(".education-experience").append(
                `<li>
                        <span class="education-year">${element.year}</span>
                        <div class="education">
                            <span class="education-title">${element.title}</span>
                            <p class="education-content">${element.description}</p>
                        </div>
                    </li>`
        )});
    }
    ).catch(e=>console.log(e));
};

export {getInformation,getEducation}