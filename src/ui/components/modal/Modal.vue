<template>
    <transition name="modal">
        <div class="modal-mask" :class="{'modal-displaying': isDisplaying}">
            <div class="modal-wrapper container">
                <div class="row">
                    <Card class="modal-content col-lg-6 col-md-12">
                        <h3>
                            {{ header }}
                        </h3>

                        <textarea class="inputField" id="inputField"/>

                        <div class="spacer"/>

                        <button class="button button-border button-rounded button-action activeButton"
                                id="submitButton">
                            Подтвердить
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Card from "@/ui/components/card/Card.vue";

@Options({
    components: {Card},
})
export default class Modal extends Vue {
    header = ""

    isDisplaying = false

    private inputField: HTMLInputElement | null = null

    setSubmitButtonOnClick(functionToInvoke: (inputString: string) => (void)) {
        let submitButton = document.getElementById('submitButton')

        submitButton?.addEventListener('click', () => {
            if (this.inputField) {
                functionToInvoke(this.inputField.value)

                this.inputField.value = ""
            }
        })
    }

    private initInputField() {
        this.inputField = document.getElementById('inputField') as HTMLInputElement
    }

    mounted() {
        this.initInputField()
    }
}
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    transition: opacity 0.3s ease;
}

.modal-mask.modal-displaying {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-content {
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    transition: all 0.3s ease;
    position: relative;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.modal-content::-webkit-scrollbar {
    display: none;
}

.inputField {
    height: 15vh;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    resize: none;
}

.button {
    width: 40%;
    margin-left: 30%;
    margin-right: 30%;
}
</style>
