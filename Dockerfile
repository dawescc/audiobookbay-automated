FROM python:3.13-slim

LABEL org.opencontainers.image.source=https://github.com/dawescc/audiobookbay-automated


WORKDIR /app
COPY /app /app
RUN pip install --no-cache-dir -r /app/requirements.txt
EXPOSE 5078
CMD ["python", "app.py"]
