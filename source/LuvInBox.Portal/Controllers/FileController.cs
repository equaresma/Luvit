using com.luvinbox.domain.extensions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace com.luvinbox.site.Controllers {
    [Route("api/file")]
    [ApiController]
    public class FileController : ControllerBase {
        [HttpPost]
        public async Task<ActionResult> Post(string name) {
            try {
                name = name.CleanCharacters();
                var uploadFile = Request.Form.Files.FirstOrDefault();
                if (uploadFile == null)
                    return StatusCode(500, "Invalid File");

                FileInfo f = new FileInfo(uploadFile.FileName);
                string newFileName = $"{name}{f.Extension}";
                string path = Path.Combine(Directory.GetCurrentDirectory(), "ClientApp/public/images/logos", newFileName);

                using (Stream stream = new FileStream(path, FileMode.Create)) {
                    await uploadFile.CopyToAsync(stream);
                }

                return StatusCode(201, newFileName);
            } catch (Exception ex) {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
