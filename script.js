const setName = () => {
  const newname = prompt('인스타그램 아이디가 무엇인가요?')
  
  if(!newname) return alert("값이 입력되지 않았습니다.")
  document.getElementById('user-name').innerText = newname
}
