using com.luvinbox.domain.interfaces.repository;

namespace com.luvinbox.domain.dtos {
    public class RepositorySettingsDTO : IRepositorySettings {
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
