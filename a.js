const users = [
    { name: "Harsh", color: "red" },
    { name: "Rahul", color: "green" },
    { name: "Adarsh", color: "blue" }
  ];
  
  const textArea = document.getElementById("textArea");
  
  textArea.addEventListener("input", e => {
    const text = textArea.value;
    const words = text.split(" ");
  
    words.forEach(word => {
      users.forEach(user => {
        const regex = new RegExp(user.name, "gi");
  
        if (word.match(regex)) {
        //   const highlightedWord = `<span style="background-color: ${user.color};">${word}</span>`;
        if(word=="Rahul"){
          textArea.style.color = "green";
        }
        if(word=="Harsh"){
          textArea.style.color = "red";
        }
        if(word=="Adarsh"){
          textArea.style.color = "blue";
        }
        }
      });
    });
  });
  