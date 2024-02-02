import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppFooter from '@/components/sakka/AppFooter.vue'

describe('AppFooter.vue', () => {
  it('renders logo image', () => {
    const wrapper = mount(AppFooter);
    expect(wrapper.find('img.img').exists()).toBe(true);
  });

  it('displays correct section titles', () => {
    const wrapper = mount(AppFooter);
    const sectionTitles = wrapper.findAll('h4');
    expect(sectionTitles.length).toBe(4);
    if (sectionTitles.length > 0) {
    expect(sectionTitles[0].text()).toBe('104 專區');
    expect(sectionTitles[1].text()).toBe('人才招募');
    expect(sectionTitles[2].text()).toBe('友善連結');
    expect(sectionTitles[3].text()).toBe('小額捐款');
    }
  });

  it('displays correct contact information', () => {
    const wrapper = mount(AppFooter);
    const contactInfo = wrapper.findAll('.text-black-150.text-2xl.flex.flex-col.mt-2 > div');
    expect(contactInfo.length).toBe(3);

    expect(contactInfo[0].text()).toBe('喵星區，毛茸茸大道 88 號，喵喵大樓 3 樓');
    expect(contactInfo[1].text()).toBe('(02) 888-5678');
    expect(contactInfo[2].text()).toBe('meowoffice@linmeow.tw');
  });

  it('renders the copyright notice', () => {
    const wrapper = mount(AppFooter);
    const copyrightNotice = wrapper.find('.copyright');
    expect(copyrightNotice.text()).toBe('© 2023 喵薩卡 版權所有。');
  });

 
});