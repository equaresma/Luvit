namespace com.luvinbox.domain.interfaces {
    public interface IOrderItem {
        decimal Price { get; set; }
        string ProductId { get; set; }
        string ProductName { get; set; }
        int Quantity { get; set; }
        string CurrencyId { get; set; }
    }
}