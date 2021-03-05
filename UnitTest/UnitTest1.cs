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

    public SongControllerTests()
    {
        _mockRepo = new Mock<IRepository<MoQuotePlusSong>>();
        _controller = new SongController(_mockRepo.Object);
    }

    [Fact]
    public void GetbySlc_WhenSlcCalled_ReturnsASong()
    {
        var songResult = _controller.Get(3);

        Assert.IsType<Task<IActionResult>>(songResult);
    }

    [Fact]
    public async Task GetbySlc_WhenSlcIsPassed_ReturnsOkResult()
    {
        var slcResult = await _controller.Get(2);
        var actual = slcResult as OkObjectResult;

        Assert.NotNull(actual);
        Assert.Equal(200, actual.StatusCode);
    }
}
