FROM mcr.microsoft.com/dotnet/sdk:5.0 AS runtime
WORKDIR /app
COPY ./ /app
RUN dotnet restore ./APISegmento/APISegmento.csproj
RUN dotnet publish ./APISegmento/APISegmento.csproj -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:3.1
WORKDIR /app
ENV ASPNETCORE_URLS http://*:5001
EXPOSE 5001
COPY --from=runtime /app/publish .
ENTRYPOINT ["dotnet", "APISegmento.dll"]