FROM mcr.microsoft.com/dotnet/sdk:5.0 AS runtime
WORKDIR /app
COPY ./ /app
RUN dotnet restore ./APIConversao/APIConversao.csproj
RUN dotnet publish ./APIConversao/APIConversao.csproj -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:3.1
WORKDIR /app
ENV ASPNETCORE_URLS http://*:5002
EXPOSE 5002
COPY --from=runtime /app/publish .
ENTRYPOINT ["dotnet", "APIConversao.dll"]