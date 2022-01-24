
export default function (defaultDataValue = null) { // defaultDataValue传入数据的类型默认为null
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue
      }
    },
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  }
}