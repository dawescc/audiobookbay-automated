FROM python:3.13-slim

LABEL org.opencontainers.image.title=audiobookbay-automated
LABEL org.opencontainers.image.source=https://github.com/dawescc/audiobookbay-automated
LABEL org.opencontainers.image.url=https://github.com/dawescc/audiobookbay-automated
LABEL org.opencontainers.image.description="Adds magnets from AudioBookBay to a client."
LABEL org.opencontainers.image.licenses=MIT
LABEL org.opencontainers.image.version=0.3.0

WORKDIR /app
COPY /app /app
RUN pip install --no-cache-dir -r /app/requirements.txt
EXPOSE 5078
CMD ["python", "app.py"]
