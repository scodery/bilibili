getSW()
function getSW () {
  $.ajax({
    url: './source/slideWrap.json',
    dataType: 'json',
    success: function (data) {
      initSlide(data)
      initWrap(data)
    },
    error: function (err) {
      console.log(err)
    }
  })
}


/* 初始化轮播图 */
function initSlide (data) {
  /* 2. 初始化轮播图 */
  const $slide = $('.slide_items')
  const $slideTrigger = $('.slide .trigger')
  $.each(data.slide, function (index, ele) {
    var $item = new layer.createSlide(ele)
    $slide.append($item)

    var $span = document.createElement('span')
    $slideTrigger.append($span)
  })
  // 给第一个添加on
  $slideTrigger.children().eq(0).addClass('on')

  const $slideItem = $('.slide_items .item')
  const $slideWidth = $slide.width()
  autoplay($slideWidth, $slideItem, $slideTrigger)

  /* 6. 初始化推荐 */
  const $recommend = $('.recommend')
  const $recomTrigger = $('.recommend .trigger')
  $.each(data.recommend, function (index, ele) {
    var $item = new layer.createSlide(ele)
    $recommend.append($item)

    var span = document.createElement('span')
    $recomTrigger.append(span)
  })
  // 给第一个添加on
  $recomTrigger.children().eq(0).addClass('on')

  const $recomItem = $('.recommend .item')
  const $recomWidth = $recommend.width()
  autoplay($recomWidth, $recomItem, $recomTrigger)
}

/*  初始化推荐 */
function initWrap (data) {
  const $wrap = $('.wrap')
  $.each(data.wrap, function (index, ele) {
    const $item = new layer.createWrap(ele)
    $wrap.append($item)
  })
}


/* 定义一个方法，改变轮播图 */
function autoplay (width, ele, trigger) {
  let timer
  let currentIndex = 0
  timer = setInterval(() => {
    currentIndex++
    currentIndex %= ele.length

    trigger.children().eq(currentIndex).addClass('on')
    trigger.children().eq(currentIndex).siblings().removeClass('on')

    ele.css('left', -width * currentIndex)
  }, 5000)
}