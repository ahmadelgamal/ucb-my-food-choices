
async function checkPostData(item) {
  const response = await fetch("/profiles/user/:id", {
    method: "get",
    body: JSON.stringify({ restriction_id: item }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
  } else {
    alert(response.statusText);
  }
}
