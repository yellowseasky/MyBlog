<template>
  <form
    id="data-form-container"
    class="data-form-container"
    ref="form"
    @submit.prevent="handleSubmit"
  >
    <div class="form-item">
      <div class="input-area">
        <input type="text" v-model="formData.nickName" maxlength="10" placeholder="用户昵称">
        <span class="tip">{{nameLength}}/10</span>
      </div>
      <div class="error">{{error.nickName}}</div>
    </div>
    <div class="form-item">
      <div class="input-area">
        <textarea
          maxlength="300"
          placeholder="输入内容"
          v-model="formData.content"
        ></textarea>
        <span class="tip">{{contentLength}}/300</span>
      </div>
      <div class="error">{{error.content}}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmiting">
          {{ isSubmiting?'提交中...' : '提交' }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickName: "",
        content: ""
      },
      error: {
        nickName: "",
        content: ""
      },
      isSubmiting: false // 按钮的状态
    }
  },
  computed: {
    nameLength() {
      return this.formData.nickName.length
    },
    contentLength() {
      return this.formData.content.length
    }
  },
  methods: {
    handleSubmit() {
      this.error.nickName = this.formData.nickName ? "" : "请输入用户昵称";
      this.error.content = this.formData.content ? "" : "请输入用户昵称";

      if(this.error.nickName&&this.error.content) {
        // 有错误
        return ;
      }
      this.isSubmiting = true;
      this.$emit("submit", this.formData, (successMsg) => {
        this.$message({
          content: successMsg,
          type: "success",
          duration: 1000,
          container: this.$refs.form,
          callback:() => {
            this.isSubmiting = false
            this.formData.nickname = "";
            this.formData.content = "";
          }
        })
      })// 让父组件来处理
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.input-area {
  width: 50%;
  position: relative;
}

.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: @gray;
  font-size: 12px;
}

input,
textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px dashed @gray;
  outline: none;
  color: @words;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    border-color: @primary;
  }
}
input {
  padding: 0 15px;
  height: 40px;
}
textarea {
  resize: none;
  padding: 8px 15px;
  height: 120px;
}
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}

</style>