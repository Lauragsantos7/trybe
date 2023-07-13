from task_manager.database import Database


def test_read_database_is_empty_at_start():
    db_content = Database.read()
    assert db_content == []