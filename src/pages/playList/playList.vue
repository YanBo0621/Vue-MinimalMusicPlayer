<template>
  <!--正在播放-->
  <div class="playList">
    <music-list
      :list="playlist"
      :listType="1"
      @select="selectItem"
      @del="deleteItem"
    >
      <div slot="listBtn" class="list-btn">
        <span @click="$refs.dialog.show()">清空列表</span>
      </div>
    </music-list>
    <dialog
      ref="dialog"
      @confirm="clearList"
      bodyText="是否清空正在播放列表"
      confirmBtnText="清空"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import MusicList from 'components/music-list/music-list'
import Dialog from 'base/dialog/dialog'

export default {
  name: 'play-list',
  data () {
    return {
      show: false
    }
  },
  components: {
    MusicList,
    Dialog
  },
  computed: {
    ...mapGetters(['playing', 'playlist', 'currentMusic'])
  },
  methods: {
    // 清空列表事件
    clearList () {
      this.clearPlayList()
      this.$Toast('列表清空成功')
    },
    // 播放暂停事件
    selectItem (item, index) {
      if (item.id !== this.currentMusic.id) {
        this.setCurrentIndex(index)
        this.setPlaying(true)
      }
    },
    // 删除事件
    deleteItem (index) {
      let list = [...this.playlist]
      list.splice(index, 1)
      this.removerPlayListItem({ list, index })
      this.$Toast('删除成功')
    },
    ...mapMutations({
      setPlaying: 'SET_PLAYING',
      setCurrentIndex: 'SET_CURRENTINDEX',
      clearPlaylist: 'CLEAR_PLAYLIST'
    }),
    ...mapActions(['removerPlayListItem', 'clearPlayList'])
  }
}
</script>

<style lang="less">
.playList {
  position: relative;
  width: 100%;
  height: 100%;
  .musicList {
    width: 100%;
    height: 100%;
    .list-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      span {
        padding: 5px 20px;
        cursor: pointer;
        user-select: none;
        &:hover {
          color: @text_color_active;
        }
      }
    }
  }
}
</style>
