/* 获取数据 */
getList()
function getList () {
  $.ajax({
    url: './source/resource.json',
    dataType: 'json',
    success: function (data) {
      init(data)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

/* 初始化数据 */
function init (data) {
  /* 1. 初始化直播 */
  initLiving(data.living)
  function initLiving (data) {
    const $living = $('.live-list')
    $.each(data.list, function (index, ele) {
      var $item = new layer.createLiving(ele)
      $living.append($item)
    })
  }

  /* 2. 初始化项目 */
  const $promo = $('.promote-list')
  initItem($promo, data.promotion)

  const $cartoon = $('.cartoon-list')
  initItem($cartoon, data.common)
  function initItem (e, data) {
    $.each(data.list, function (index, ele) {
      const $item = new layer.createItem(ele)
      e.append($item)
    })
  }
}

/* 初始化事件 */
initEvents()
function initEvents () {
  // 1. 监听排行榜给名单的移入
  $('.ranking').delegate('.rank', 'mouseenter', function () {
    $(this).find('.pvc').stop().fadeIn(100)
  })
  $('.ranking').delegate('.rank', 'mouseleave', function () {
    $(this).find('.pvc').stop().fadeOut(100)
  })
}


