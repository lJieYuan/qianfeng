// 修改密码的逻辑
// 1. 验证登录
const token = window.localStorage.getItem('token')
const id = window.localStorage.getItem('id')

if (!token || !id) {
  window.location.href = './login.html'
} else {
  getInfo()
}

// 2. 获取用户信息
function getInfo() {
  // 直接发送请求, 请求个人信息
  $.ajax({
    url: 'http://localhost:8888/users/info',
    method: 'GET',
    data: { id: id },
    headers: { authorization: token },
    success (res) {
      // 判断错误
      if (res.code !== 1) {
        window.location.href = './login.html'
      }
    }
  })
}

// 3. 表单提交发送请求, 修改密码
$('form').on('submit', function (e) {
  // 3-1. 阻止默认行为
  e.preventDefault()

  // 3-2. 采集用户信息
  const data = $('form').serialize()

  // 3-3. 发送请求
  $.ajax({
    url: 'http://localhost:8888/users/rpwd',
    method: 'POST',
    data: data + '&id=' + id,
    headers: { authorization: token },
    success (res) {
      // 3-4. 根据结果进行错误提示
      if (res.code !== 1) {
        $('form > span').css('display', 'block')
        return
      }

      // 3-5. 提示用户修改密码成功
      window.alert('修改密码成功, 点击确定跳转回登录页')
      window.location.href = './login.html'
    }
  })
})
