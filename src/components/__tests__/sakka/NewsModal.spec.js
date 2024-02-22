import {describe, it, expect} from 'vitest'
import {useMediaQuery} from '@vueuse/core'
import {vi} from 'vitest'
import {mount} from '@vue/test-utils'
import {ref} from 'vue';
import NewsModal from '@/components/sakka/NewsModal.vue'

describe('NewsModal', () => {
  it('toggles news modal when calling NewsModal method', async () => {


    const isNewsModalVisible = ref(false);
    const closeNewsModal = () => {
      isNewsModalVisible.value = false;
    };

    const wrapper = mount(NewsModal, {
      props: {closeModal: closeNewsModal},
      global: {
        provide: {isNewsModalVisible}
      }
    });



    // wrapper.vm.useMediaQuery = false
    // expect(wrapper.vm.useMediaQuery).toBe(false);

    // wrapper.vm.$el.scrollTop = 100;
    // expect(wrapper.find("#newsModal").exists()).toBe(true);
    // expect(wrapper.find(".line").exists()).toBe(true);
    // await wrapper.find("#newsModal").trigger('scroll', "100");

    // await wrapper.vm.$nextTick();
    // expect(wrapper.vm.useMediaQuery).toBe(false);
    // // expect(wrapper.find("#newsModal").element.scrollTop).toBe('-100px');
    // expect(wrapper.find(".line").classes).toBe('100px');
    // expect(window.document.getElementById("newsModal")).toBe('-100px');

    // console.log(window.document.getElementById("newsModal").children.length); // 1

  });
})
