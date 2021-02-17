namespace com.luvinbox.domain.repository.interfaces
{
    public interface IRepositorySettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
