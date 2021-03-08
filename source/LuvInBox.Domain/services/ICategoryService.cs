using com.luvinbox.domain.dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface ICategoryService {
        Task<CategoryDTO> Get(string id);
        Task<IEnumerable<CategoryDTO>> GetAll();

        Task<CategoryDTO> Post(CategoryDTO user);

        Task<CategoryDTO> Put(string id, CategoryDTO user);

        Task<bool> Delete(string id);
    }
}
