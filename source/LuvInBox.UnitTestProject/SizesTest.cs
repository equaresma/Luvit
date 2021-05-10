using AutoMapper;
using com.luvinbox.data.implement;
using com.luvinbox.domain.dtos;
using com.luvinbox.infra.mapping;
using com.luvinbox.service.services;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.UnitTestProject {
    [TestClass]
    public class SizesTest {
        [TestMethod]
        public async Task Create() {
            var sizes = new List<SizeDTO> {
                new SizeDTO() { Name = "U", Description = "Unique"},
                new SizeDTO() { Name = "XS", Description = "Extra small"},
                new SizeDTO() { Name = "S", Description = "Small"},
                new SizeDTO() { Name = "M", Description = "Medium"},
                new SizeDTO() { Name = "L", Description = "Large"},
                new SizeDTO() { Name = "XL", Description = "Extra Large"},
                new SizeDTO() { Name = "2XL", Description = "Extra Large 2"},
                new SizeDTO() { Name = "3XL", Description = "Extra Large 3"},
                new SizeDTO() { Name = "4XL", Description = "Extra Large 4"}
            };

            var mapperCfg = new MapperConfiguration(c => {
                c.AddProfile(new DtoToEntityProfile());
            });

            IMapper mapper = mapperCfg.CreateMapper();

            var repository = new SizeImplement(new RepositorySettingsDTO() { 
                ConnectionString = "mongodb://luvit-mongodb:PzpXFZxqm0IFpIcA3ECgyrgpYdbICNvtUmfWKfPtBMNArompuZITFHrDiXbUMVzeVDILxg9HbrZtHwTbvz1yxQ==@luvit-mongodb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@luvit-mongodb@",
                DatabaseName = "luvit-mongodb"
            });

            var service = new SizeService(repository, mapper);

            foreach (var size in sizes)
                await service.Post(size);

            Assert.IsTrue(true);
         }
    }
}
