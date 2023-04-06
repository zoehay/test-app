class Client {
  static baseEndpoint = "//zoemhay.com/test-app/api";
  static async getProducts() {
    const endpoint = Client.baseEndpoint + "/products";
    try {
      console.log("client get");
      const response = await fetch(endpoint);
      if (response.ok) {
        console.log(response);
        const responseJSON = await response.json();
        const products = responseJSON.products;
        return products;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default Client;
