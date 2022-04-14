<template>
    <transition name="modal">
        <div class="modal-mask" :class="{'modal-displaying': isDisplaying}">
            <div class="modal-wrapper container">
                <div class="row">
                    <Card class="modal-content col-lg-6 col-md-12">
                        <h3>
                            {{ header }}
                        </h3>

                        <textarea class="inputField" id="inputField" autofocus/>

                        <div class="spacer"/>

                        <div class="buttonWrapper">
                            <button class="button button-border button-rounded"
                                    :class="{'button-action activeButton':isAvailableToSubmitData===true,
                                            'button-flat nonActiveButton': isAvailableToSubmitData===false}"
                                    id="submitButton">
                                Подтвердить
                            </button>

                            <button class="button button-border button-rounded button-caution activeButton"
                                    id="cancelButton">
                                Отменить
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Card from "@/ui/components/card/Card.vue"

@Options({
    components: {Card},
})
export default class Modal extends Vue {
    header = ""

    isDisplaying = false

    private inputFieldValue = ""

    private isAvailableToSubmitData = false

    private inputField: HTMLInputElement | null = null

    private previousOnclick: (() => (void)) | null = null

    set setInputFieldValue(newValue: string) {
        this.inputFieldValue = newValue

        if (this.inputField) {
            this.inputField.value = this.inputFieldValue

            this.isAvailableToSubmitData = this.inputField.value.length > 0
        }
    }

    setSubmitButtonOnClick(functionToInvoke: (inputString: string) => (void)) {
        let submitButton = document.getElementById("submitButton")

        if (this.previousOnclick && submitButton) {
            submitButton.removeEventListener("click", this.previousOnclick)
        }

        let onclick = () => {
            if (this.isAvailableToSubmitData) {
                if (this.inputField) {
                    this.clearEnteredData()

                    functionToInvoke(this.inputField.value)
                }
            }
        }

        this.previousOnclick = onclick

        submitButton?.addEventListener("click", onclick)
    }

    private clearEnteredData() {
        if (this.inputField) {
            this.inputField.value = ""
        }

        this.isAvailableToSubmitData = false

        this.isDisplaying = false
    }

    private initInputField() {
        this.inputField = document.getElementById("inputField") as HTMLInputElement
    }

    private initCancelButtonOnClick() {
        let cancelButton = document.getElementById("cancelButton")

        cancelButton?.addEventListener("click", () => {
            this.clearEnteredData()
        })
    }

    private initInputFieldTextChangeListener() {
        this.inputField?.addEventListener("input", () => {
            if (this.inputField) {
                this.isAvailableToSubmitData = this.inputField.value.length > 0;
            }
        })
    }

    mounted() {
        this.initInputField()
        this.initCancelButtonOnClick()
        this.initInputFieldTextChangeListener()
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
    width: 50%;
}

.buttonWrapper {
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-left: 10%;
    margin-right: 10%;
}
</style>
