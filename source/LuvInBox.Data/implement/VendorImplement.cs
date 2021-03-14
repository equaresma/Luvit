using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;

namespace com.luvinbox.data.implement {
    public class VendorImplement : BaseRepository<Vendor>, IVendorRepository
    {
        public VendorImplement(IRepositorySettings settings) : base(settings)
        {
        }
    }
}
