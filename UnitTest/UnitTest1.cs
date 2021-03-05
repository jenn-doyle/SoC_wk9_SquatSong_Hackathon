using System;
using Xunit;
using System.Collections.Generic;
using Moq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

public class SongControllerTests
{
    private readonly Mock<IRepository<MoQuotePlusSong>> _mockRepo;
    private readonly SongController _controller;

    public BookControllerTests()
    {
        _mockRepo = new Mock<IRepository<MoQuotePlusSong>>();
        _controller = new SongController(_mockRepo.Object);
    }

    [Fact]
    public void GetbySlc_WhenIdCalled_ReturnsASong()
    {
        var songResult = _controller.Get(3);

        Assert.IsType<Task<IActionResult>>(songResult);
    }
}
