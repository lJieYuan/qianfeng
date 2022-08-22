// 个人中心的逻辑代码
// 1. 验证登录, 如果没有登录过, 那么不会展示该页面
const token = window.localStorage.getItem('token')
const id = window.localStorage.getItem('id')

// 2. 判断 token 和 id 是否存在
if (!token || !id) {
  window.location.href = './login.html'
} else {
  // 才是登录过的状态
  getInfo()
}

// 3. 获取用户信息
function getInfo() {
  // 3-1. 发送请求请求用户信息
  $.ajax({
    url: 'http://localhost:8888/users/info',
    method: 'GET',
    data: { id: id },
    headers: { authorization: token },
    success (res) {
      // 3-2. 判断已经注销过一次登录
      if (res.code !== 1) {
        window.location.href = './login.html'
        return
      } else {

        // 把用户信息进行展示
        $('form .username').val(res.info.username)
        $('form [name=nickname]').val(res.info.nickname)
        $('form [name=age]').val(res.info.age)
        $('form [name=gender]').val(res.info.gender)
      }
    }
  })
}

// 4. 修改个人信息
$('form').on('submit', function (e) {
  // 4-1. 阻止默认行为
  e.preventDefault()

  // 4-2. 采集用户信息
  const data = $('form').serialize()

  // 4-3. 发送请求
  $.ajax({
    url: 'http://localhost:8888/users/update',
    method: 'POST',
    data: data + '&id=' + id,
    headers: { authorization: token },
    success (res) {
      if (res.code === 1) {
        window.alert('修改用户信息成功')
      }
    }
  })
})
