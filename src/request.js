const url="http://localhost:8080/users/";

// TODO feedback: 有eslint error，缩进都有问题
const getInformation = (id)=>{
    // TODO feedback: 请求和渲染逻辑耦合在一起
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
            // TODO feedback: 在for循环中，每次都要操作DOM，影响性能，不推荐这样做
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
