namespace com.luvinbox.domain.interfaces.repository
{
    public interface IRepositorySettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
