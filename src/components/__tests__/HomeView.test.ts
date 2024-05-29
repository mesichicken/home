import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import axios from 'axios'
import HomeView from '@/views/HomeView.vue'
import { ElButton, ElCard } from 'element-plus';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({
      data: {
        articles: [
          {
            id: 1,
            title: "Test Title",
            slug: "test-slug",
            comments_count: 0,
            liked_count: 0,
            body_letters_count: 100,
            article_type: "type",
            emoji: "😊",
            is_suspending_private: false,
            published_at: "2022-01-01",
            body_updated_at: "2022-01-02",
            source_repo_updated_at: "2022-01-03",
            pinned: false,
            path: "path",
            user: {
              id: 2,
              name: "Test User",
              avatar_small_url: "avatar-url"
            }
          }
        ]
      }
    }))
  }
}));

describe('HomeView', () => {
  let wrapper: any;

  beforeEach(async () => {
    wrapper = await mount(HomeView, {
      global: {
        components: {
          BlogCard: {
            template: '<div></div>'
          },
          'el-button': ElButton,
          'el-card': ElCard,
        }
      }
    })
  })

  it('should mount the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('calls Get.execute and renders data correctly', async () => {
    // コンポーネントがマウントされた後の初期状態をテスト
    expect(wrapper.find('.card-container').exists()).toBe(true)

    // マウント後の非同期処理が完了するのを待つ
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.blogList.length).toBe(1)
    expect(wrapper.vm.blogList[0].title).toBe('Test Title')

    // axios.getが正しく呼び出されたことを確認
    expect(axios.get).toHaveBeenCalled()
    expect(axios.get).toHaveBeenCalledWith('/api/articles?username=mesi&order=latest', {
      headers: {
        "Content-Type": "application/json",
      },
    })
  })
})
