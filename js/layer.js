; (function (window) {
  function Layer () {
    return new Layer.prototype.init()
  }
  Layer.prototype = {
    constructor: Layer,
    init: function () { },
    /* 创建一个方法，创建每个项目 */
    createWrap: function (ele) {
      const $item = $(`
       <a href="` + ele.link + `">
         <div class="pic">
           <img class="box_pic" src="` + ele.image + `" title="` + ele.title + `" />
           <div class="up">
             <p class="mov_title" title="` + ele.video_title + `">` + ele.video_title + `</p>
             <p class="mov_column">
               <i class="bili_icon"></i>` + ele.blogger + `</p>
             <p class="mov_play_info">` + ele.count + `</p>
           </div>
         </div>
       </a>
      `)
      return $item
    },

    /* 创建一个方法，创建轮播图 */
    createSlide: function (ele) {
      const $item = $(`
  <a href="` + ele.link + `">
    <div class="item" style="left: 0;">
      <img class="item_pic" src="` + ele.image + `" alt="` + ele.desc + `" />
      <p class="item_title">` + ele.desc + `</p>
    </div>
  </a>
  `)
      return $item
    },

    /* 创建项目 */
    createItem: function (ele) {
      const $item = $(`
        <a href="` + ele.link + `">
          <div class="pic">
            <div class="card-pic">
              <img src="` + ele.image + `" width="206px" height="116" />
              <div class="count">
                <div class="left">  
                  <span><i></i>` + ele.count + `</span>
                  <span><i></i>` + ele.like + `</span>
                </div>
                <div class="right">
                  <span>` + ele.time + `</span>
                </div>
              </div>
            </div>
            <p class="pic-title" title="` + ele.title + `">
              <span>` + ele.title + `</span>
            </p>
            <a href="` + ele.blogger_link + `" class="bili_tag" >
              <i class="bili_icon"></i>` + ele.name + `
            </a>
          </div>
        </a>
  `)
      return $item
    },

    /* 直播类 */
    createLiving: function (ele) {
      const $item = $(`
    <a href="` + ele.link + `">
      <div class="pic">
        <div class="card-pic">
          <img src="` + ele.image + `" />
          <div class="count">
            <div class="left"><i></i>` + ele.star + `</div>
          </div>
        </div>
        <div class="up">
          <div class="up_cover">
            <img src="` + ele.name_pic + `" />
          </div>
          <div class="up_txt">
            <p class="name">` + ele.name + `</p>
            <p class="desc" title="` + ele.desc + `">
              ` + ele.desc + `
            </p>
            <p class="tag">` + ele.tag + `</p>
          </div>
        </div>
      </div>
    </a>
  `)
      return $item
    },

    /* 排行榜类 */
    // 1. 动画类
    createRankTop: function (index, ele) {
      const $item = $(`
       <div class="rank hot">
         <span class="number">` + (index + 1) + `</span>
         <div class="preview">
            <div class="pic">
              <a href="`+ ele.link + `">
                <img src="` + ele.image + `" />
              </a>
            </div>
            <div class="txt">
              <a href="`+ ele.link + `" class="link">
                <p title="` + ele.title + `" class="title">
                  ` + ele.title + `
                </p>
              </a>
              <span>` + ele.grade + `</span>
            </div>
          </div>
         <div class="pvc" style="display: none">
           <div class="content">
             <img src="` + ele.image + `" />
             <div class="info">
               <p class="title">
                 ` + ele.title + `
               </p>
               <div class="subtitle">
                 <span class="name">` + ele.name + `</span>
                 <span class="point">·</span>
                 <span class="time">` + ele.time + `</span>
               </div>
             </div>
           </div>
           <div class="count">
             <ul>
               <li><i></i>` + ele.count + `</li>
               <li><i></i>` + ele.discuss + `</li>
               <li><i></i>` + ele.star + `</li>
               <li><i></i>` + ele.money + `</li>
             </ul>
           </div>
         </div>
       </div>
      `)

      return $item
    },
    createRank: function (index, ele) {
      const $item = $(`
        <div class="rank">
          <span class="number">` + (index + 1) + `</span>
          <a href="`+ ele.link + `"> 
            <p class="title" title="` + ele.title + `">` + ele.title + `</p>
          </a>
          <div class="pvc" style="display: none">
            <div class="content">
              <img src="` + ele.image + `" />
              <div class="info">
                <p class="title">
                  ` + ele.title + `
                </p>
                <div class="subtitle">
                  <span class="name">` + ele.name + `</span>
                  <span class="point">·</span>
                  <span class="time">` + ele.time + `</span>
                </div>
              </div>
            </div>
            <div class="count">
              <ul>
                <li><i></i>` + ele.count + `</li>
                <li><i></i>` + ele.discuss + `</li>
                <li><i></i>` + ele.star + `</li>
                <li><i></i>` + ele.money + `</li>
              </ul>
            </div>
          </div>
        </div>
      `)

      return $item
    },
    // 2. 番剧类
    createRankList: function (index, ele) {
      const $item = $(`
        <div class="rank">
          <span class="number">`+ (index + 1) + `</span>
          <a href="`+ ele.link + `" class="content">
            <p class="title" title="`+ ele.title + `">` + ele.title + `</p>
            <p class="update">`+ ele.newest + `</p>
          </a>
        </div>
      `)
      return $item
    },

    // 创建目录
    /* 菜单第一栏 */
    createPageTab: function (ele) {
      const $item = $(`
       <li>
         <a href="`+ ele.link + `">
           <div class="round"></div>
           <p>`+ ele.name + `</p>
         </a>
       </li>
      `)
      return $item
    },

    /* 菜单第二栏 */
    createMenu: function (ele) {
      const $item = $(`
        <a href="`+ ele.link + `">
          <div class="item">
             <span>`+ ele.name + `<em>` + ele.count + `</em></span>
          </div>
         </a>
      `)
      return $item
    },
    createMenuBottom: function (ele) {
      const $item = $(`
        <a href="`+ ele.link + `">
          <div class="item">
             <span class="more">`+ ele.name + `<em style="display:none;"></em></span>
          </div>
         </a>
      `)

      return $item
    },

    /* 菜单第三栏 */
    createFriendShip: function (ele) {
      const $item = $(`
       <li class="shipItem">
         <a href="`+ ele.link + `">
           <svg id="bili-musicplus" viewBox="0 0 1024 1024">`+ ele.svg + `</svg>
           <span>`+ ele.name + `</span>
         </a>
       </li>
       `)
      return $item
    },

    /* 创建时刻表 */
    createTimeList: function (ele) {
      const $item = $(`
        <a href="`+ ele.link + `">
          <div class="line-card">
            <div class="line-card-pic">
              <img src="`+ ele.image + `" alt="` + ele.title + `">
            </div>
            <div class="line-card-txt">
              <p class="name" title="` + ele.title + `">` + ele.title + `</p>
              <p class="update">` + ele.update + `</p>
            </div>
          </div>
        </a>
      `)
      return $item
    }
  },

    Layer.prototype.init.prototype = Layer.prototype
  window.Layer = Layer
})(window)
