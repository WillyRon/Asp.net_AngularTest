USE [Company]
GO

DELETE FROM [dbo].[Employees]
      WHERE DATEDIFF(YEAR, Birthday, GETDATE())>70
GO


