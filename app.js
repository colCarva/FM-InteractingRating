const { createApp, ref } = Vue
const script = {
    setup(){
        const list = ref([
            {value: 1, active: false},
            {value: 2, active: false},
            {value: 3, active: false},
            {value: 4, active: false},
            {value: 5, active: false},
        ]);
        let selectedNumber = ref(0);
        let isThanksActive = ref(false);
        const selected = (i) => {
            selectedNumber.value = list.value[i].value
            if (selectedNumber.value > 0 && selectedNumber.value <= 5){
                list.value.forEach((element, index) => {
                    if(index != i){
                        element.active = false
                    } else {
                        list.value[i].active = true
                    }
                });
            }
        };
        const submitNumber = () => {
            if (selectedNumber.value > 0 && selectedNumber.value <= 5){
                return isThanksActive.value = true;
            }
            return isThanksActive.value = false;
        }
        return { list, selected, selectedNumber, isThanksActive, submitNumber }
    }
}
createApp(script).mount('#app')