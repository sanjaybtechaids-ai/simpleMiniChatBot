let inputElement = document.getElementById("inputText");
let responseContainer = document.getElementById("responseTextContainer");
let loadingSpinner = document.getElementById("spinner");


function appendChat(title, description) {
      let smallConatiner = document.createElement("div");
      responseContainer.appendChild(smallConatiner);


      let titleElement = document.createElement("h3");
      titleElement.textContent = title;
      smallConatiner.appendChild(titleElement);

      let paraElement = document.createElement("p");
      paraElement.textContent = description + " for more information click on the link below";
      smallConatiner.appendChild(paraElement);


      let linkElement = document.createElement("a");
      linkElement.href = link;
      linkElement.textContent = link;
      linkElement.target = "_blank";
      smallConatiner.appendChild(linkElement);


}








inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        loadingSpinner.classList.remove("d-none");

        let userVal = inputElement.value;
        inputElement.value = "";

        let url = "https://apis.ccbp.in/wiki-search?search=" + userVal;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
 
                descript = jsonData.search_results[0]. description;
                title = jsonData.search_results[0].title;
                link = jsonData.search_results[0].link;            

                appendChat(title,descript,link);
                loadingSpinner.classList.add("d-none");
            });
    }
});