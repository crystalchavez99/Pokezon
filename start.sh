#!/bin/bash
set -e

# Run database migrations
flask db upgrade

# Start the application
exec gunicorn app:app --bind 0.0.0.0:$PORT
