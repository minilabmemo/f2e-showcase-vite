import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import AppContent from '@/components/sakka/AppContent.vue'

describe('AppContent', () => {
  it('toggles news modal when calling toggleNewsModal method', async () => {
    const wrapper = mount(AppContent);

    // Initial state
    expect(wrapper.vm.isNewsModalVisible).toBe(false);

    // Toggle news modal
    await wrapper.vm.toggleNewsModal();

    // Modal should be visible after toggling
    expect(wrapper.vm.isNewsModalVisible).toBe(true);
  });
})
