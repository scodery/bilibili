
const $animeList = $('.anime-list')

/* 新番时刻表 */
initTimeList()
function initTimeList () {
  $.ajax({
    url: './source/time.json',
    dataType: 'json',
    success: function (data) {
      initList(data.anime.week)
      initAnimeCardEvents(data.anime)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

/* 初始化日期 */
initWeek()
function initWeek () {
  const $week = $('.week')
  const week = ["最新", "周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  $.each(week, (index, day) => {
    const li = $('<li class="tab-switch">' + day + '</li>')
    $week.append(li)
  })
  $week.children().eq(0).addClass('on')
}

/* 默认显示最新数据 */
function initList (data) {
  $.each(data, function (index, ele) {
    if (data != '') {
      const $item = new layer.createTimeList(ele)
      $animeList.append($item)
    } else {
      $animeList.addClass('no-data')
      const span = $('<span class="nodata">今天没有番剧更新</span>')
      $animeList.append(span)
    }
  })
}

function initAnimeCardEvents (data) {
  // 1. 监听最新的点击
  $('.tab-switch').eq(0).click(function () {
    dayLoad($animeList, $(this), data.week)
  })
  // 2. 监听周一的点击
  $('.tab-switch').eq(1).click(function () {
    dayLoad($animeList, $(this), data.monday)
  })
  // 3. 监听周二的点击
  $('.tab-switch').eq(2).click(function () {
    dayLoad($animeList, $(this), data.tuesday)
  })
  // 4. 监听周三的点击
  $('.tab-switch').eq(3).click(function () {
    dayLoad($animeList, $(this), data.wednesday)
  })
  // 5. 监听周四的点击
  $('.tab-switch').eq(4).click(function () {
    dayLoad($animeList, $(this), data.thursday)
  })
  // 6. 监听周五的点击
  $('.tab-switch').eq(5).click(function () {
    dayLoad($animeList, $(this), data.friday)
  })
  // 7. 监听六的点击
  $('.tab-switch').eq(6).click(function () {
    dayLoad($animeList, $(this), data.saturday)
  })
  // 8. 监听周末的点击
  $('.tab-switch').eq(7).click(function () {
    dayLoad($animeList, $(this), data.sunday)
  })
}

/* 创建一个方法，点击加载每天的数据 */
function dayLoad (area, that, day) {
  area.html(" ")
  if (area.attr('class').indexOf('no-data') != -1) {
    area.removeClass('no-data')
  }

  /* 切换样式 */
  that.addClass('on')
  that.siblings().removeClass('on')

  /* 判断室友有数据 */
  if (day == '') {
    area.addClass('no-data')
    const span = $('<span class="nodata">今天没有番剧更新</span>')
    area.append(span)
  } else {
    initList(day)
  }
}