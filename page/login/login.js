
define("page/login/login", function(require, exports, module){
    
    console.log('login def')
    module.exports = function(opt) {
        console.log('login run')
        var $ = require('zepto');
        require('libs/zepto.info');
        //require.async('libs/zepto.date');
        //require('libs/zepto.selectcity');
        
        
        var $form = $("#form"),
            $username = $('#username', $form),
            $password = $('#password', $form),
            $btnSubmit = $('.btn-submit', $form);
        
        
        $btnSubmit.on('click', function(e){
            
            var $this = $(this);
            
            // 表单提交验证
            if ( $username.val()=='' || $password.val()=='' ) {
                $.info({message:"请输入用户名和密码"});
                // 异步测试 2016-03-22 jiajianrong
                /*
                require.async('libs/zepto.info', function(){
                    $.info({message:"请输入用户名和密码"});
                });
                */
                return;
            }
            
            
            $form[0].submit();
            return;
            
    
//          // 禁用按钮
//          $this.text('登录中...').addClass('disabled');
//  
//          // 提交请求，包含校验验证码及身份证号
//          $.ajax({
//              url: '/login/submit',
//              type: 'post',
//              data: $form.serialize(),
//              dataType: 'json'
//          })
//          .done(function(data) {
//              if(data) {
//                  // 0是成功，其他都是失败; detail 原因描述
//                  if(data.resultCode == 0) {
//                      location.href = '/customer-list';
//                  }else {
//                      $.info(data.detail);
//                  }
//              }else {
//                  $.info('登录失败，请重试！');
//              }
//              $this.text('登录').removeClass('disabled');
//          })
//          .fail(function() {
//              $.info('请求失败，请重试！');
//              $this.text('登录').removeClass('disabled');
//          });
        
        });
    };
});

