var MockHttpClient = (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function (restUrl, options) {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [{ title: 'Test', name: 'Some Name' },];
    return MockHttpClient;
}());
export default MockHttpClient;

//# sourceMappingURL=mock.client.js.map
