
async function getUserById(user_id) {
    const response = await fetch("/profiles/user/:id", {
      method: "get",
     
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log(user_id);
    } else {
      alert(response.statusText);
    }
  }
