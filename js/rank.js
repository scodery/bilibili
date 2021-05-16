/* 排行榜类 */
getRankList()
function getRankList () {
  $.ajax({
    url: './source/ranks.json',
    dataType: 'json',
    success: function (data) {
      initRank(data)
    },
    error: function (err) {
      console.log(err)
    }
  })
}

/* 2. 初始化排行榜 */
function initRank (data) {
  // 1. 动画部分-排行榜
  const $cartoon_rank = $('.cartoon .ranking')
  $.each(data.cartoon_rank, function (index, ele) {
    if (index == 0) {
      const $item = new layer.createRankTop(index, ele)
      $cartoon_rank.append($item)
    } else {
      const $item = new layer.createRank(index, ele)
      $cartoon_rank.append($item)
    }
  })
  const $cartoon_rank_span = $('.cartoon .ranking .rank .number')
  thirdRank($cartoon_rank_span)


  // 2. 番剧部分排行榜
  const $anime_rank = $('.anime .ranking')
  $.each(data.anime_rank, function (index, ele) {
    const $item = new layer.createRankList(index, ele)
    $anime_rank.append($item)
  })
  const $rank_span = $('.anime .ranking .rank .number')
  thirdRank($rank_span)
}

/* 创建一个方法，特殊表示前三名 */
function thirdRank (that) {
  for (var i = 0; i < 3; i++) {
    $span3 = that.eq(i)
    $span3.addClass('on')
  }
}