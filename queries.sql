-- Simulated event_log table
-- Represents client-side tracking events ingested into analytics system

CREATE TABLE event_log (
  event_name VARCHAR(50),
  user_id VARCHAR(50),
  page VARCHAR(100),
  timestamp TIMESTAMP,
  email_domain VARCHAR(50)
);


-- SQL queries


-- View events and verify ingestion
SELECT *
FROM event_log
ORDER BY timestamp DESC;

-- Counts events by type 
SELECT event_name, COUNT(*) AS total_events
FROM event_log
GROUP BY event_name;


-- find users who clicked signup but didn't submit
SELECT DISTINCT user_id
FROM event_log
WHERE event_name = 'signup_click'
AND user_id NOT IN (
  SELECT user_id
  FROM event_log
  WHERE event_name = 'form_submit'
);


-- Analyze submissions by email domain
SELECT email_domain, COUNT(*) AS submissions
FROM event_log
WHERE event_name = 'form_submit'
GROUP BY email_domain
ORDER BY submissions DESC;


-- Detect missing metadata
SELECT *
FROM event_log
WHERE event_name = 'form_submit'
AND email_domain IS NULL;
